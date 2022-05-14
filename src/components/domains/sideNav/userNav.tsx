import styled from '@emotion/styled'
import { Select } from '../../core-ui/inputs'
import { Text } from '../../core-ui/text'

interface Props { }

const USER_DATA = [
    { id: 1, name: "Joyse" },
]

function UserNav(props: Props) {


    return (
        <UserNavContainer>
            <Text>
                1. Choose your user
            </Text>
            <Select>
                {USER_DATA.map((user, i) =>
                    <option key={i} value={user.id}>{user.name}</option>
                )}
            </Select>
        </UserNavContainer>
    )
}

export default UserNav


const UserNavContainer = styled.div`
    padding: 1em 0 0 0;
`