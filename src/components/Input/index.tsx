import React, { forwardRef } from 'react';

import { Icon } from '../../icons';
import { useId } from '../../hooks';
import { Feedback } from '../Feedback';
import { InputProps } from './types';
import { Text } from '../Text';
import { COLORS } from '../Feedback/types';
import { Container } from './styles';
import { Label } from '../InputUtils';

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      icon,
      iconLeft,
      iconSize,
      iconColor,
      iconAction,
      disabled = false,
      className = '',
      feedbackShow,
      feedbackType = 'default',
      feedbackMessage,
      label,
      style,
      onChange = () => null,
      onChangeValue = () => null,
      ...props
    },
    ref,
  ) => {
    const fieldId = useId();

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
      onChange(event);
      onChangeValue(event.target.value);
    }

    return props.type === 'date' ? (
      <Text>Use the InputDate component for date fields.</Text>
    ) : (
      <Container
        className={'t-input-root ' + className}
        $hasIcon={!!icon}
        $hasAction={!!iconAction}
        aria-disabled={disabled}
      >
        <Label fieldId={fieldId} label={label} required={props.required} />

        <div
          className="t-input-wrapper"
          data-feedbacktype={feedbackShow ? feedbackType : null}
        >
          {iconLeft && (
            <Icon
              size={iconSize || 'sm'}
              name={iconLeft}
              color={iconColor}
              className="t-input-icon-left"
            />
          )}

          <input
            {...props}
            ref={ref}
            id={fieldId}
            disabled={disabled}
            className="t-input-field"
            onChange={handleChange}
            style={
              feedbackShow ? { ...style, borderColor: COLORS[feedbackType] } : style
            }
          />

          {icon && (
            <Icon
              size={iconSize || 'md'}
              name={icon}
              color={iconColor}
              onClick={iconAction}
              className="t-input-icon-right"
            />
          )}
        </div>

        <Feedback
          disabled={disabled}
          feedbackShow={feedbackShow}
          feedbackMessage={feedbackMessage}
          feedbackType={feedbackType}
        />
      </Container>
    );
  },
);
