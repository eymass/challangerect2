const styles = theme => ({
  drawerRoot: {},
  icon: {
    color: '#fff',
  },
  iconSelected: {
    color: '#42baff',
  },
  logoRoot: {
    marginBottom: '30px',
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
  },
  rowText: {
    fontSize: '13px',
  },
  logoLoginNone: {
    transition: theme.transitions.create('height', {
      duration: theme.transitions.duration.standard,
    }),
    borderRadius: '2px',
    height: '0px',
  },
  rowWrapper: {
    display: 'flex',
    justifyContent: 'flex-start',
    margin: '10px 0 0 12px',
  },
  drawerRow: {
    color: '#fff',
    fontWeight: 500,
    fontSize: '13px',
    letterSpacing: '0.5px',
    display: 'flex',
    justifyContent: 'flex-start',
  },
  drawerSelectedRow: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRight: '3px solid #4cc0ff',
    color: '#fff',
    fontWeight: 500,
    letterSpacing: '0.5px',
    fontSize: '13px',
    display: 'flex',
    justifyContent: 'flex-start',
  },
  toggleButton: {
    transition: theme.transitions.create('border-radius', {
      duration: theme.transitions.duration.standard,
    }),
    padding: '5px',
    margin: '2px',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#42baff',
      borderRadius: '10px',
    },
  },
  rotateButton: {
    transform: 'rotate(180deg)',
  },
  buttonRoot: {
    minHeight: '52px',
    zIndex: 1400,
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '25px',
    marginRight: '15px',
    marginLeft: '15px',
    marginBottom: '30px',
  },
  logoLogin: {
    transition: theme.transitions.create('height', {
      duration: theme.transitions.duration.standard,
    }),
    borderRadius: '2px',
    height: '80px',
  },
  drawerPaper: {
    width: '240px',
    overflowX: 'hidden',
  },
  drawerOpen: {
    width: '240px',
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClosed: {
    backgroundColor: '#0070ba',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: '80px',
    [theme.breakpoints.up('sm')]: {
      width: '80px',
    },
  },
});

export default styles;
