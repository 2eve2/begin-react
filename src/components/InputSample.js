import React, {useState} from 'react';

function InputSample() {
  
  const [inputs, setInputs] = useState ({
    username: '',
    nickname: ''
  });

  const {username, nickname} = inputs;
  const onReset = () => {
    setInputs({
      username: '',
      nickname: ''
    }
    )
  };

  const onChange = (e) => {
    const {value, name} = e.target;

    setInputs({
      ...inputs,
      [name]: value
    })
  }


  return (
    <div>
      <input name="username" placeholder="이름" onChange={onChange} value={username} />
      <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname}/>
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {username} ({nickname})
      </div>
    </div>
  );
}

export default InputSample;