import React, { useState } from 'react';

import { Icon } from '../..';
import { Container } from './styles';
import { Input, Text } from '../../../components';
import { ICON_NAMES, ICONS } from '../../types';

export const IconTable = () => {
  const icons = Object.keys(ICONS) as ICON_NAMES[];
  const [search, setSearch] = useState('');

  return (
    <Container>
      <div className="t-icon-table-search">
        <Input
          icon="Search"
          iconColor="#aaa"
          placeholder="Buscar"
          value={search}
          onChangeValue={(value) => setSearch(value as string)}
        />
      </div>

      <div className="t-icon-table-icons">
        {icons
          .filter((icon) => icon.toLowerCase().includes(search.toLowerCase()))
          .map((icon) => (
            <div className="t-icon-table-item">
              <div className="t-icon-table-icon">
                <Icon name={icon} size="lg" />
              </div>

              <Text as="span">{icon}</Text>
            </div>
          ))}
      </div>
    </Container>
  );
};
