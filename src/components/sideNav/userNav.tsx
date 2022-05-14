
import { MockUserSelectOptions } from '@/mock/mockUserData'
import { useUserContext } from '@/providers/userProvider'
import styled from '@emotion/styled'
import { Select } from '../core-ui/inputs'
import { Text } from '../core-ui/text'


interface Props { }

function UserNav(props: Props) {
    const { assignCurrentUser } = useUserContext()
    const changeUser = (evt: any) => {
        assignCurrentUser({ userId: evt.target.value })
    }

    return (
        <UserNavContainer>
            <Text>
                1. Choose your user
            </Text>
            <Select onChange={(evt) => changeUser(evt)}>
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