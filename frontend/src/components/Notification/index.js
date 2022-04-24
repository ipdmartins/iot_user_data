import React from 'react';
import { toast } from 'react-toastify';

function Notification({ title, autoClose = 3000, type = 'info' }) {
  switch (type) {
    case 'success':
      toast.success(
        <div>
          <i className="simple-icon-check" style={{ marginRight: 5 }} />
          {title}
        </div>,
        {
          position: 'top-right',
          pauseOnHover: true,
          autoClose,
          type,
        },
      );
      break;
    case 'error':
      toast.error(
        <div>
          <i className="simple-icon-close" style={{ marginRight: 5 }} />
          {title}
        </div>,
        {
          position: 'top-right',
          pauseOnHover: true,
          autoClose,
          type,
        },
      );
      break;
    default:
      break;
  }
}

export default Notification;

