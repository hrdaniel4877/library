// 'state' argument is NOT app state;
// only the state this reducer is responsible for
export default function (state=null, action) {
	switch (sction.type) {
		case 'BOOK_SELECTED':
			return action.payload;
	};
	return state;
};

