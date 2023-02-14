import React, {useState} from 'react'

const withAuth = (Component) => {

    const [ test1, set1Test] = useState(false)
    const [ test2, set2Test] = useState(false)
    const [ test3, set3Test] = useState(false)


    test1 == true {
        
    }

    const Auth = () => {
        // redux store | context 등의 상태를 통해 조건부 처리를 한다
        const isLoggedIn = useSelector((store) => user.isLoggedIn);
        if (!isLoggedIn) {
            // Login 컴포넌트를 출력하거나
            // 이미 로그인 화면이 구현된 페이지를 사용하고 싶다면 useRouter()를 통해 라우팅
            return React.createElement(React.Fragment, null, "login page");
        }
        // 로그인이 되어있다면
        return React.createElement(Component, null);
    };
    return Auth;
};
export default withAuth;