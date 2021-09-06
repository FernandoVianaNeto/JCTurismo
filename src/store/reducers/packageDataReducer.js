initialState = {

}

export function sendPackageData(state = initialState, action) {
  switch(action.type) {
    case 'SEND_PACKAGE_DATA':
      return {
        package: action.payload
      }
  }

  return state;
}
