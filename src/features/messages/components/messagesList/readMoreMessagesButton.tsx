
import { PrimaryButton } from '@/components/core-ui/button';
import Icon from '@/components/core-ui/icons/icons';

import { BsArrowDownShort, BsArrowUpShort } from 'react-icons/bs';

interface Props {
    type: "PREV" | "NEXT";
    onClick: () => void
}

function ReadMoreMessageButton(props: Props) {
    const { type, onClick } = props

    return (
        <PrimaryButton onClick={onClick}>
            Read More
            <Icon width={20} height={20} color="white" strokeWidth={1}>
                {type === "PREV" && <BsArrowUpShort />}
                {type === "NEXT" && <BsArrowDownShort />}
            </Icon>
        </PrimaryButton >
    )
}

export default ReadMoreMessageButton
