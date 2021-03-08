// ts props 约束
import * as React from 'react';
import { MemberEntity } from '../../model';
// 组件
// 传值时候，类型约束
interface Props{
    member:MemberEntity
}
export const MemberRow:React.FC<Props> = ({member}) => {
    return (
        <tr>
            <td>
                <img src={member.avatar_url} />
            </td>
            <td>
                <span>{ member.id}</span>
            </td>
            <td>
                <span>{ member.login}</span>
            </td>
        </tr>
    )
}