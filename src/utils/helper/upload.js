import { dashboardAPI } from '../../redux/dashboard';

export class FileManager {
  /**
   *
   * @param {*} e The event object
   * @param {*} ref The ref to the img via useRef
   * @param {*} setState The setState action to be executed
   */
  onChange = (e, ref, setState) => {
    const file = e.target.files?.[0];

    setState(file);
    if (file && ref.current) {
      const reader = new FileReader();

      reader.onload = (e) => {
        if (ref.current) {
          ref.current.src = e.target?.result;
        }
      };

      reader.readAsDataURL(file);
    }
  };

  /**
   *
   * @param {*} dispatch useDispatch
   * @param {*} file The file object to upload
   * @param {*} type The type i.e GAMES
   * @param {*} request_type The request type i.e 2
   * @returns object
   */
  upload = async (dispatch, file, type = 'GAMES', request_type = 2) => {
    const uploadData = new FormData();

    uploadData.append('file', file);
    uploadData.append('type', type);
    uploadData.append('request_type', request_type);
    const resp = await dispatch(dashboardAPI.upload(uploadData));
    if (resp.payload.status === 'success') {
      return resp.payload.data;
    } else {
      console.error(resp.payload);
      return false;
    }
  };
}
