import React from "react";

export interface LabelledButtonParams {
  icon: string;
  label: string;
  value: any;
}

const LabelledButton = (props: LabelledButtonParams) => {
  return (
    <span>
      <div className="ui basic label">
        <i className={`${props.icon} icon`}></i>
        {props.label}
      </div>
      <span className="ui basic label">{props.value}</span>
    </span>
  );
};

export default LabelledButton;
