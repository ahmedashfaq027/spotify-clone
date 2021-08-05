export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    selected_track: null,
    selected_playlist: null,
    // Remove after developing...
    // token: "BQASN1eY2BfVnYfqVFmvQsUv99xZ16QIaHYU9bXDjXO0fFFOGhTcRzyOGiW1DDRhtB_P_WiKQKDx2mSqvTB8nfGcoZHqXpjPBBgvk8dN-_SrKD8ZTMIIhYGroyBFLJTynM-GseoBiXedDdXQhRmC-P4UqnV0d74DfSeeXv1vX5KblK9b07eR",
};

const reducer = (state, action) => {
    console.log(action);

    // Action -> type, [payload]

    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user,
            };

        case "SET_TOKEN":
            return {
                ...state,
                token: action.token,
            };

        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists: action.playlists,
            };

        case "SET_DISCOVER_WEEKLY":
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            };

        case "SET_SELECTEDTRACK":
            return {
                ...state,
                selected_track: action.selected_track,
            };

        case "SET_SELECTEDPLAYLIST":
            return {
                ...state,
                selected_playlist: action.selected_playlist,
            };

        default:
            return state;
    }
};

export default reducer;
