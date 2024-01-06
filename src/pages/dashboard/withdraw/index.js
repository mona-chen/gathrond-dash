import React, { useEffect, useState } from 'react';
import { Modal, Button, Form, Table } from 'react-bootstrap';
import DashboardLayout from '../../../components/layouts/dashboard/DashboardLayout';
import { useDispatch, useSelector } from 'react-redux';
import { dashboardAPI } from '../../../redux/dashboard';
import GInput from '../../../components/common/inputs/GInputs';
import Select from 'react-select';
import { debounce, formatDateTime, formatNumWithComma, reactSelectStyle } from '../../../utils/helper/Helper';
import './index.css';
import GButton from '../../../components/common/button/Button';
const WithdrawalScreen = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedBank, setSelectedBank] = useState({});
  const [validatedName, setValidatedName] = useState('');
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  const dispatch = useDispatch();

  const handleWithdrawal = async () => {
    const resp = await dispatch(
      dashboardAPI.sendMoney({
        account_number: formData?.account_number,
        amount: formData?.amount,
        bank_code: selectedBank.value,
        bank_id: formData?.bank_Id,
        client_id: formData?.client_Id,
        ...formData,
      }),
    );

    if (resp.payload?.status === 'success') {
      handleClose();
    }
  };
  // const transactions = [
  //   { id: 1, date: '2022-01-01', amount: 500, bank: 'Bank A' },
  //   { id: 2, date: '2022-01-05', amount: 300, bank: 'Bank B' },
  // ];

  const { bank_list, loading, dashboard_summary, transactions } = useSelector((state) => state.dashboard);

  const [formData, setFormData] = useState();
  useEffect(() => {
    dispatch(dashboardAPI.getBankLists());
    dispatch(dashboardAPI.getTransactions());
    dispatch(dashboardAPI.getDashboardData());
  }, []);

  function formatBankList() {
    return bank_list.map((d) => {
      return {
        label: d?.bank_name,
        value: d?.bank_code,
      };
    });
  }

  const blist = formatBankList();

  const validateAccount = debounce(async () => {
    if (formData?.account_number?.length === 10) {
      const resp = await dispatch(
        dashboardAPI.resolveAccountNo({
          account_number: formData?.account_number,
          bank_code: selectedBank?.value,
        }),
      );

      if (resp.payload?.status === 'success') {
        setValidatedName(resp.payload.data.account_name);
        console.log(formData);

        setFormData({ ...formData, ...resp.payload.data });
      }
    }
  }, 500);

  console.log(transactions);
  return (
    <DashboardLayout>
      <div className="container mt-5">
        {/* Account Balance Section */}
        <div className="row">
          <div className="col-md-6 offset-md-3 text-center">
            <h2>Account Balance: ₦{formatNumWithComma(dashboard_summary?.wallet?.ngn_balance, 'ngn')}</h2>
          </div>
        </div>

        {/* Withdraw Button */}
        <div className="row mt-3">
          <div className="col-md-6 offset-md-3 text-center">
            <button className="btn btn-primary" onClick={handleShow}>
              Withdraw
            </button>
          </div>
        </div>

        {/* Transactions Table */}
        <div className="row mt-5">
          <div className="col-md-8 offset-md-2">
            <h3>Transaction History</h3>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Date</th>
                  <th>Amount</th>
                  <th>Bank</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction) => (
                  <tr key={transaction.id}>
                    <td>{transaction.id}</td>
                    <td>{formatDateTime(transaction.created_at)}</td>
                    <td>${formatNumWithComma(transaction?.amount, 'ngn')}</td>
                    <td>{transaction.account_name + ' - ' + transaction.bank_name}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>

        {/* Withdraw Modal */}
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Withdrawal Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* Withdrawal Form */}
            <Form>
              <Form.Group controlId="amount">
                <Form.Label>Amount:</Form.Label>
                <Form.Control
                  onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                  value={formData?.amount}
                  type="number"
                  placeholder="Enter amount"
                />
              </Form.Group>
              <Form.Group controlId="bank">
                <Form.Label>Select Bank:</Form.Label>
                <Select
                  styles={reactSelectStyle}
                  defaultValue={{}}
                  value={selectedBank}
                  onChange={(e) => {
                    setSelectedBank(e);
                  }}
                  options={blist}
                />
              </Form.Group>
              <Form.Group controlId="accountNumber">
                <Form.Label>Account Number:</Form.Label>
                <Form.Control
                  onChange={(e) => {
                    validateAccount(e);
                    setValidatedName('');
                    setFormData({
                      ...formData,
                      account_number: e.target.value,
                    });
                  }}
                  type="text"
                  placeholder="Enter account number"
                />

                <small className="validated_name">{validatedName}</small>
              </Form.Group>

              {/* <Form.Group controlId="pin">
                <Form.Label>Transaction PIN:</Form.Label>
                <Form.Control type="password" placeholder="Enter transaction PIN" />
              </Form.Group> */}
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <GButton
              loading={loading}
              variant="primary"
              onClick={dashboard_summary?.admin_id === 1 && handleWithdrawal}
            >
              Send
            </GButton>
          </Modal.Footer>
        </Modal>
      </div>
    </DashboardLayout>
  );
};

export default WithdrawalScreen;
