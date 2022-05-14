
import { MockUserSelectOptions } from '@/mock/mockUserData'
import { useUserContext } from '@/providers/userProvider'
import styled from '@emotion/styled'
import { Select } from '../core-ui/inputs'
import { Text } from '../core-ui/text'


interface Props { }

function UserNav(props: Props) {
    const { assignCurrentUser, currentUser } = useUserContext()
    const changeUser = (userId: string) => {
        assignCurrentUser({ userId })
    }

    return (
        <UserNavContainer>
            <Text>
                1. Choose your user
            </Text>
            <Select value={currentUser.userId} onChange={(evt) => changeUser(evt.target.value)}>
                {MockUserSelectOptions.map((option, i) =>
                    <option key={i} value={option.userId}>{option.name}</option>
                )}
            </Select>
        </UserNavContainer>
    )
}

export default UserNav


const UserNavContainer = styled.div`
    padding: 1em 0 0 0;
`