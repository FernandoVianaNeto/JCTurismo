const initialState = {
  id: null,
  title: null,
  categorias: null,
  description: null,
};

export function sendPackageData(state = initialState, action) {
  switch (action.type) {
    case 'SEND_PACKAGE_DATA':
      return {
        id: action.payload.id,
        title: action.payload.title,
        categorias: action.payload.categorias,
        description: action.payload.description,
        imgLink: action.payload.imgLink,
      };
    default:
      return state;
  }
}
