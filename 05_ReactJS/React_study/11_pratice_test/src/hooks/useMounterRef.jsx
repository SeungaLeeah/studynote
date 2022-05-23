import React from 'react'

const useMounterRef = () => {
    const mountedRef = React.useRef(false);

    React.useEffect(()=>{
        setTimeout (()=>{
            mountedRef.current = true;
        });
    }, []);
  return mountedRef;
}

export default useMounterRef