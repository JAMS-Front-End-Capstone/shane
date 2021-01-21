import React from 'react';
class Reply extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log('rendering Component_Reply');
    return (
      <span className="Component_Reply">
        <div class="_25dajjyJ">
          <form class="_2mamHENZ">
            <span class="_3x5_awTA ui_social_avatar xtra-small inline">
              <div class="BvCdigLq">
                <svg viewBox="0 0 24 24" width="24px" height="24px" class="_2HBN-k68 _2JndpOur">
                  <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM7.88 18.85a4.271 4.271 0 018.24 0 8.001 8.001 0 01-8.24 0zm9.89-1.321a6.257 6.257 0 00-11.537 0 8 8 0 1111.537 0z">
                  </path>
                  <path d="M12 6a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm0 5a1.5 1.5 0 110-3 1.5 1.5 0 010 3z">
                  </path>
                </svg>
              </div>
            </span>
            <div class="_2MtEN6up">
              <textarea type="text" name="answer" rows="1" class="_1VRk7fnV _2nK73A9w" placeholder="Answer question" autocomplete="on">
              </textarea>
            </div>
          </form>
        </div>
      </span>
    );
  }
}
export default Reply;
