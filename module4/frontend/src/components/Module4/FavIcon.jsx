const React = require('react');
class FavIcon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render(props) {
    console.log('rendering Module4-ListItem');

    return (
      <div className="saveToTripWrapper">
        <link rel="stylesheet" href="module4-FavIcon.css"></link>
        <div className="vb-div">
          <span className="vb-background">
            <span className="vb-red">
              <svg viewBox="0 0 24 24" width="1em" height="1em" className="vb-red-svg">
                <path d="M12 2C6.487 2 2 6.487 2 12c0 5.515 4.487 10 10 10 5.515 0 10-4.485 10-10 0-5.513-4.485-10-10-10zm4.688 10.911c-.975 1.188-4.687 4.434-4.687 4.434S8.258 14.1 7.29 12.903c-1.14-1.411-1.12-3.241.049-4.351.611-.58 1.42-.898 2.279-.898s1.668.318 2.279.898l.096.092.09-.087a3.296 3.296 0 012.278-.897c.86 0 1.669.318 2.277.897 1.201 1.139 1.219 2.929.05 4.354z">
                </path>
              </svg>
            </span>
            <span className="vb-white">
              <svg viewBox="0 0 24 24" width="1em" height="1em" className="vb-white-svg">
                <path d="M14.361 8.768c-.574 0-1.111.211-1.516.594l-.854.812-.861-.819c-.401-.382-.939-.592-1.513-.592s-1.111.21-1.514.593c-.876.832-.589 2.059.048 2.847.726.896 2.961 2.89 3.845 3.667.878-.779 3.098-2.771 3.831-3.665.662-.808.936-2 .047-2.844a2.182 2.182 0 00-1.513-.593z">
                </path>
                <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm4.688 10.911c-.975 1.188-4.687 4.435-4.687 4.435s-3.743-3.247-4.711-4.442c-1.141-1.411-1.12-3.241.049-4.351.61-.58 1.419-.898 2.279-.898s1.668.319 2.278.898l.096.091.09-.086a3.291 3.291 0 012.278-.897c.86 0 1.668.317 2.279.897 1.2 1.138 1.218 2.927.049 4.353z">
                </path>
              </svg>
            </span>
          </span>
        </div>
      </div>
    );
  }
}
export default FavIcon;
