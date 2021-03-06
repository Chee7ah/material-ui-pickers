// @ts-nocheck
import React, { useState } from 'react';
import { Paper, Button } from '@material-ui/core';
import { useStaticState, ClockView, Calendar } from '@material-ui/pickers';

function StaticPickers() {
  const [value, handleDateChange] = useState(new Date());

  // You can past mostly all available props, like minDate, maxDate, and so on
  const { pickerProps, wrapperProps } = useStaticState({
    value,
    onChange: handleDateChange,
  });

  return (
    <React.Fragment>
      <div>
        <Paper style={{ overflow: 'hidden' }}>
          <Calendar {...pickerProps} />
        </Paper>

        <Button fullWidth onClick={wrapperProps.onClear}>
          Clear date ({value && value.toJSON()})
        </Button>
      </div>

      <div>
        <ClockView // or just directly use components
          type="hours"
          date={value}
          ampm={false}
          onMinutesChange={() => {}}
          onSecondsChange={() => {}}
          onHourChange={(date) => handleDateChange(date)}
        />
      </div>
    </React.Fragment>
  );
}

export default StaticPickers;
