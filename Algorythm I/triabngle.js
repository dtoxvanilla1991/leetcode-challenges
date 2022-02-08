var minimumTotal = function(triangle) {
	for (let row = triangle.length - 2; row >= 0; row--) {
		for (let col = 0; col <= row; col++) {
			const min = Math.min(triangle[row + 1][col], triangle[row + 1][col + 1]);

			triangle[row][col] += min;
		}
	}

	return triangle[0];
};
minimumTotal([[2],[3,4],[6,5,7],[4,1,8,3]]);