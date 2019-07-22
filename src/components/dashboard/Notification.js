import React from 'react';
import moment from 'moment';

const Notifications = props => {
  console.log(props.notifications);
  const { notifications } = props;
  return (
    <aside className="section">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Notifications</span>
          <ul className="notifications">
            {notifications &&
              notifications.map(item => {
                return (
                  <li key={item.id}>
                    <span className="pink-text">{item.author}</span>{' '}
                    <span>{item.content}</span>{' '}
                    <span className="grey-text note-date">
                      {moment(item.time.toDate()).fromNow()}
                    </span>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Notifications;
