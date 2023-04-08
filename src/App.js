import logo from './logo.svg';
import './App.css';
import { CurrentUserLoader } from './CurrentUserLoader';
import { UserInfo } from './UserInfo';
import { UserLoader } from './UserLoader';
import { ResourceLoader } from './loaders/ResourceLoader';
import { ProductInfo } from './products/ProductInfo';
import { DataSource } from './loaders/DataSource';
import { api } from './axios/api';


const userIds = ['123', '234', '235'];

const getServerData = url => async () => {
  const response = await api.get('/users/123')
  return response.data;
}
function App() {
  return (
    <>
    <DataSource getDataFunc={getServerData('/users/123')} resourceName='user'>
       <UserInfo />
    </DataSource>
    {/* <ResourceLoader resourceUrl='/products/1234' resourceName='product'>
        <ProductInfo />
    </ResourceLoader>

    <ResourceLoader resourceUrl='/users/123' resourceName='user'>
        <UserInfo />
    </ResourceLoader> */}
    {/* {
      // make api calls for a list of Ids
      userIds.map((userId, index) => (
        <UserLoader userId={userId}>
          <UserInfo />
        </UserLoader>
      ))
    } */}
    {/* <CurrentUserLoader userId='235'>
        UserInfo />
      </CurrentUserLoader> */}
    </>
  );
}

export default App;
