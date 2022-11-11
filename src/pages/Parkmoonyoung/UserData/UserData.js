import React, { useEffect, useState } from 'react';

export default function UserData() {
  const [userInfoList, setUserInfoList] = useState([]);

  useEffect(() => {
    fetch('/data/userInfoList.json')
      .then(response => response.json())
      .then(result => setUserInfoList(result));
  }, []);

  return (
    <div>
      UserData
      {userInfoList.map(userInfo => {
        return (
          <ul key={userInfo.id}>
            <li>{userInfo.name}</li>
            <li>{userInfo.email}</li>
            <li>{userInfo.phone}</li>
          </ul>
        );
      })}
      {/* <ul>
        <li>name</li>
        <li>email</li>
        <li>phone</li>
      </ul>
      <ul>
        <li>name</li>
        <li>email</li>
        <li>phone</li>
      </ul>
      <ul>
        <li>name</li>
        <li>email</li>
        <li>phone</li>
      </ul>
      <ul>
        <li>name</li>
        <li>email</li>
        <li>phone</li>
      </ul>
      <ul>
        <li>name</li>
        <li>email</li>
        <li>phone</li>
      </ul>
      <ul>
        <li>name</li>
        <li>email</li>
        <li>phone</li>
      </ul>
      <ul>
        <li>name</li>
        <li>email</li>
        <li>phone</li>
      </ul>
      <ul>
        <li>name</li>
        <li>email</li>
        <li>phone</li>
      </ul>
      <ul>
        <li>name</li>
        <li>email</li>
        <li>phone</li>
      </ul>
      <ul>
        <li>name</li>
        <li>email</li>
        <li>phone</li>
      </ul> */}
    </div>
  );
}
