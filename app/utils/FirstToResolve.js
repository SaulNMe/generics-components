export default function firstToResolve (promises) {
	return new Promise((resolve, reject) => {
		promises.forEach((promise) => {
			promise.then(res => {
				if (res.status === 204){
					resolve(res.config);
				}
			}).catch((/*error*/) => {/*console.log("error")*/});
		});
		Promise.all(promises).then(() => reject('Username not found'));
	});
}
