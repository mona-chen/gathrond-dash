import { Dispatch, ReactElement, SetStateAction, useEffect } from 'react';
export function DetectNetwork(
  phone_no: string,
  setSelectedProvider: Dispatch<SetStateAction<{ name: string; icon: string | ReactElement }>>,
) {
  const isMtn = [
    '0803',
    '0806',
    '0703',
    '07025',
    '07026',
    '0704',
    '0810',
    '0813',
    '0814',
    '0816',
    '0903',
    '0906',
    '0913',
    '0706',
    '0704',
    '0916',
  ];

  const isGlo = ['0805', '0807', '0705', '0811', '0905', '0805', '0915', '0815'];

  const isAirtel = ['0802', '0808', '0701', '0708', '0808', '0812', '0901', '0902', '0904', '0907', '0802', '0912'];

  const isEtisalat = ['0809', '08168', '0817', '0818', '0909', '0908'];

  function detect() {
    // logger.log("yes");
    if (phone_no?.length >= 0) {
      isEtisalat.includes(phone_no.slice(0, 4))
        ? setSelectedProvider((prev) => {
            return {
              ...prev,
              name: 'mobile',
            };
          })
        : isMtn.includes(phone_no.slice(0, 4))
        ? setSelectedProvider((prev) => {
            return {
              ...prev,
              name: 'mtn',
            };
          })
        : isGlo.includes(phone_no.slice(0, 4))
        ? setSelectedProvider((prev) => {
            return {
              ...prev,
              name: 'glo',
            };
          })
        : isAirtel.includes(phone_no.slice(0, 4))
        ? setSelectedProvider((prev) => {
            return {
              ...prev,
              name: 'airtel',
            };
          })
        : '';
    }
  }
  useEffect(() => {
    // logger.log("yes");
    detect();
  }, [phone_no]);
}

export function returnNetworkDetect(phone_no: string) {
  const isMtn = [
    '0803',
    '0806',
    '0703',
    '07025',
    '07026',
    '0704',
    '0810',
    '0813',
    '0814',
    '0816',
    '0903',
    '0906',
    '0913',
    '0706',
    '0704',
    '0916',
  ];

  const isGlo = ['0805', '0807', '0705', '0811', '0905', '0805', '0915', '0815'];

  const isAirtel = ['0802', '0808', '0701', '0708', '0808', '0812', '0901', '0902', '0904', '0907', '0802', '0912'];

  const isEtisalat = ['0809', '08168', '0817', '0818', '0909', '0908'];

  function detect() {
    let val;
    if (phone_no.length >= 0) {
      isEtisalat.includes(phone_no.slice(0, 4))
        ? (val = 'mobile')
        : isMtn.includes(phone_no.slice(0, 4))
        ? (val = 'mtn')
        : isGlo.includes(phone_no.slice(0, 4))
        ? (val = 'glo')
        : isAirtel.includes(phone_no.slice(0, 4))
        ? (val = 'airtel')
        : '';
    }
    return val;
  }
  useEffect(() => {
    detect();
  }, [phone_no]);
}
