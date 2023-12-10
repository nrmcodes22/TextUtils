import React from 'react';

export default function Alert(props){
  let alertClasses = '';
    if(!props.alert.type)
    {  
    switch (props.alert.type) {
    case "success":
      alertClasses = 'bg-green-200 border-l-4 border-green-500 p-4';
      break;
    case "error":
      alertClasses = 'bg-red-200 border-l-4 border-red-500 p-4';
      break;
    case "info":
      alertClasses = 'bg-blue-200 border-l-4 border-blue-500 p-4';
      break;
    case "warning":
      alertClasses = 'bg-yellow-200 border-l-4 border-yellow-500 p-4';
      break;
    default:
      alertClasses = 'bg-gray-200 border-l-4 border-gray-500 p-4';
  }
}

  return (
    <div className={alertClasses}>
      <p className={`text-${props.alert.type === 'warning' ? 'yellow' : props.alert.type}-800`}>{props.alert.message}</p>
    </div>
  );
};


