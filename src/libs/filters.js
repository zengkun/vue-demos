//格式化时间戳
export function formatDateTime(strTime) {
	var date = new Date(strTime);
	return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
}

export function money(val) {
	return `${val} 元`
}