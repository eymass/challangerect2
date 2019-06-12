/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import People from '@material-ui/icons/People';
import Repeat from '@material-ui/icons/Repeat';
import Info from '@material-ui/icons/Info';
import { updateSelectedMenu } from './actions';

const DrawerRow = React.memo(function DrawerRow({
  row,
  classes,
  rowClass,
  iconClass,
  dispatch,
  isOpen,
  rowTextClass,
}) {
  const handleSelectMenu = menuId => {
    if (menuId && typeof menuId === 'string' && menuId.length > 0) {
      dispatch(updateSelectedMenu(menuId));
    }
  };

  const getIcon = () => {
    switch (row.icon) {
      case 'people':
        return <People className={iconClass} />;
      case 'info':
        return <Info className={iconClass} />;
      case 'repeat':
        return <Repeat className={iconClass} />;
      default:
        return '';
    }
  };

  return (
    <ListItem
      classes={{ root: rowClass }}
      button
      key={row.id}
      onClick={() => handleSelectMenu(row.id)}
    >
      <div className={classes.rowWrapper}>
        {getIcon()}
        {isOpen ? (
          <ListItemText
            classes={{ primary: rowTextClass }}
            style={{ marginLeft: '10px' }}
            primary={row.label}
          />
        ) : (
          <ListItemText primary="" />
        )}
      </div>
    </ListItem>
  );
});

DrawerRow.propTypes = {
  row: PropTypes.object.isRequired,
  isOpen: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  rowClass: PropTypes.string.isRequired,
  iconClass: PropTypes.string.isRequired,
  rowTextClass: PropTypes.string.isRequired,
};

export default DrawerRow;
