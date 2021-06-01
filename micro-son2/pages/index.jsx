import React, { useEffect } from "react";
import { subscribe } from '../../micro-father/lib/micro-context/postal'
import { MICRO_MOUNT_DATA } from '../../micro-father/lib/micro-context/constant'

export default function ColorPage() {

	const getData = (data) => {
		console.log(data, 111111);
	}

	useEffect(() => {

		console.log('son effect')

		const unsubscribe = subscribe(MICRO_MOUNT_DATA, getData);

		return () => {
			unsubscribe();
		}
	}, []);

	
	return (
		<div className="wyz">
			啊就是大是框架大卡十九大啥肯德基啊可是大家阿啥肯德基阿卡圣诞节阿卡丽是多久阿喀琉斯
		</div>
	)
}
