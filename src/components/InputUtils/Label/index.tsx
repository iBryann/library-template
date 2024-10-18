import React from 'react';

import { Text } from '../../Text';
import { Icon } from '../../../icons';
import { ILabel } from './types';
import { Container } from './styles';

export const Label = ({ fieldId, label, required }: ILabel) =>
  label ? (
    <Container htmlFor={fieldId} className="t-input-label">
      <Text variant="label">
        {label}
        {required && <Icon name="Required" size="sm" color="#EA0F29" />}
      </Text>
    </Container>
  ) : (
    <></>
  );
