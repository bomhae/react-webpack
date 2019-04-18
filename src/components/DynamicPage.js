import React from 'react';
import { Header } from 'semantic-ui-react';

import Layout from './Layout';

const handleClick = () => {
  return (
  fetch("/unicompany/base/findEmployeeList.do")
  .then(response => response.json())
  .then(json => console.log(json))
  .catch(err => console.log(err))
  );
}

const DynamicPage = () => {

  return (
    <Layout>
      <Header as="h2">Dynamic Page</Header>
      <p>
        This page was loaded asynchronously!!!
      </p>
      <input type="button" onClick={handleClick}/>
    </Layout>
  );
};

export default DynamicPage;
