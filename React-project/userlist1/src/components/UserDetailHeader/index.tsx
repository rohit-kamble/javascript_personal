import {UserDetailHeaderProps} from './types';

export default function UserDetailHeader({logOut}: UserDetailHeaderProps){
  return(
    <>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        <div>
          <h2 style={{
            margin: 0,
            color: 'lightgray'
          }}>Users</h2>
        </div>
        <div>
          <button
            style={{
              padding: '4px 10px',
              background: 'lightgray',
              minWidth: '100px',
              margin: '0 10px'
            }}
          >
                Add User
          </button>
          <button
            style={{
              minWidth: '100px',
              padding: '4px 10px',
              background: 'lightgray'
            }}
            onClick={logOut}>Logout
          </button>
        </div>
            
      </div>
      <p style={{
        color: 'lightgray',
      }}>Here are all the users for this project</p>
    </>
  );
}