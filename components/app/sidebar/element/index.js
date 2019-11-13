export default Elements = (teams) => {
    return [home, { HeaderTitle: 'Team', lists: [...teams, createTeam] }, etc]
}

const home = { HeaderTitle: 'HOME', lists: [{ title: 'Home', location: 'Home', iconName: 'home' }] }

const createTeam = { title: 'create team', location: 'TeamCreate', iconName: 'plus' }
const etc = {
    HeaderTitle: 'ETC',
    lists: [
        { title: '활동기록', location: 'Activity', iconName: 'dashboard' },
        { title: '즐겨찾기', location: 'Bookmark', iconName: 'star' },
        { title: 'Settings', location: 'Setting', iconName: 'setting' },
    ],
}
