import { css } from 'emotion';
import FileSaver from 'file-saver';
import PropTypes from 'prop-types';
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Content from '../Content';
import Form from '../Form';
import EmailBuilder from '../EmailBuilder';

function TabContainer({ children }) {
  return (
    <Typography component="div" style={{ padding: 8 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const rootStyles = css({
  backgroundColor: '#DCDCDC',
  width: '480px',
});

class TabsWrappedLabel extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    ids: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired,
  }

  state = {
    value: 'one',
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  saveEmail = email => () => {
    const blob = new Blob([email], {type: "text/plain;charset=utf-8"});
    FileSaver.saveAs(blob, "email.html");
  }

  render() {
    const { value } = this.state;

    return (
      <div className={rootStyles}>
        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange}>
            <Tab value="one" label="Content"/>
            <Tab value="two" label="Structure"/>
            <Tab value="three" label="Settings"/>
          </Tabs>
        </AppBar>
        {value === 'one' && <Content/>}
        {value === 'two' && <TabContainer>Coming soon...</TabContainer>}
        {value === 'three' &&
          <EmailBuilder>
            {email => (
              <button type='button' onClick={this.saveEmail(email)}>Build Email</button>
            )}
          </EmailBuilder>
        }
      </div>
    );
  }
}

TabsWrappedLabel.propTypes = {};

export default TabsWrappedLabel;
