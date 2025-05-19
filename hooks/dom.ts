
import React from 'react'
export function getTouchEventData(
	e: TouchEvent | MouseEvent | React.TouchEvent<Element> | React.MouseEvent<Element>
) {
	if ('touches' in e) {
		return e.touches[0];
	}
	return e;
}
