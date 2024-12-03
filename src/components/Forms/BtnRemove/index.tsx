import { SvgFromUri, SvgUri } from "react-native-svg"
import { BoxBtnRemove, TitleBtnRemove } from "./styled.BtnRemove"
import Colors from "../../../assets/Colors"
import SvgImage from "react-native-svg/lib/typescript/elements/Image"

interface Props {
    title: string,
    onPress: () => void
}

export const BtnRemove: React.FC<Props> = ({ onPress, title }) => {
    return (
        <BoxBtnRemove onPress={onPress}>
            <SvgUri color="red" uri="https://raw.githubusercontent.com/DiiOliiver/icons/refs/heads/main/img/lixeira.png" />
            <TitleBtnRemove>
                {title}
            </TitleBtnRemove>
        </BoxBtnRemove>
    )
}