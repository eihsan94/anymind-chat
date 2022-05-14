
import { PrimaryButton } from '@/components/core-ui/button';
import Icon from '@/components/core-ui/icons/icons';

import { BsArrowDownShort, BsArrowUpShort } from 'react-icons/bs';

interface Props {
    type: "PREV" | "NEXT";
}

function ReadMoreChatButton(props: Props) {
    const { type } = props

    return (
        <PrimaryButton>
            Read More
            <Icon width={20} height={20} color="white" strokeWidth={1}>
                {type === "PREV" && <BsArrowUpShort />}
                {type === "NEXT" && <BsArrowDownShort />}
            </Icon>
        </PrimaryButton >
    )
}

export default ReadMoreChatButton
