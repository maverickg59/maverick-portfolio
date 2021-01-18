// definitions
// records = an array of objects where each object is a record to be displayed
// rows = total number of records to display on a single page
// adjacents = total number of blocks as the product of adjacents \* 2 to be pushed onto the end of the range
// pages = total number of pages to be displayed by the paginator
// currentPage = current page
// principal = the first block in a range of pagination blocks
// limits = the first and last blocks in pagination
// range = an array containing the total span of blocks to be rendered
// block = a navigation element that corresponds by page number to a rendered collection of content

// (block length = 1) if pages.length === 1 return principal block
// [principalBlock]

// (block length = 2) if pages.length === 2 return principal block plus single right offset
// [principalBlock, blockOne]

// (block length = 3) if pages.length === 3 return principal block plus double right offset
// [navLeft, principalBlock, blockOne, blockTwo, navRight]

// (block length = 6) if pages.length === 4
// [navLeft, principalBlock, blockOne, blockTwo, lastBlock, navRight]

// (block length = 7) if pages.length === 5
// [navLeft, firstBlock, principalBlock, blockOne, blockTwo, lastBlock, navRight]

// (block length = 8) if pages.length === 6
// [navLeft, firstBlock, [ellipsis], principalBlock, blockOne, blockTwo, [blockThree], ellipsis, lastBlock, navRight]

// STANDARD
// (block length = 8) if pages.length === 7
// [navLeft, firstBlock, [ellipsis], principalBlock, blockOne, blockTwo, [blockThree], [blockFour], ellipsis, lastBlock, navRight]
// OR
// +1 adjacents
// (block length = 9) if pages.length === 7
// [navLeft, firstBlock, principalBlock, blockOne, blockTwo, blockThree, blockFour, lastBlock, navRight]

// STANDARD
// (block length = 8) if pages.length === 8
// [navLeft, firstBlock, [ellipsis], principalBlock, blockOne, blockTwo, [blockThree], [blockFour], [blockFive], ellipsis, lastBlock, navRight]
// OR
// +1 adjacents
// (block length = 10) if pages.length === 8
// [navLeft, firstBlock, [ellipsis] principalBlock, blockOne, blockTwo, blockThree, blockFour, ellipsis, [blockFive], lastBlock, navRight]

// STANDARD
// (block length = 8) if pages.length === 9
// [navLeft, firstBlock, [ellipsis], principalBlock, blockOne, blockTwo, [blockThree], [blockFour], [blockFive], [blockSix], ellipsis, lastBlock, navRight]
// OR
// +1 adjacents
// (block length = 10) if pages.length === 9
// [navLeft, firstBlock, [ellipsis] principalBlock, blockOne, blockTwo, blockThree, blockFour, ellipsis, [blockFive], [blockSix], lastBlock, navRight]
// OR
// +2 adjacents
// (block length = 11) if pages.length === 9
// [navLeft, firstBlock, principalBlock, blockOne, blockTwo, blockThree, blockFour, blockFive, blockSix, lastBlock, navRight]

// STANDARD
// (block length = 8) if pages.length === 10+
// [navLeft, firstBlock, [ellipsis], principalBlock, blockOne, blockTwo, [blockThree], [blockFour], [blockFive], [blockSix], [blockSeven], ellipsis, lastBlock, navRight]
// OR
// +1 adjacents
// (block length = 10) if pages.length === 10+
// [navLeft, firstBlock, [ellipsis] principalBlock, blockOne, blockTwo, blockThree, blockFour, ellipsis, [blockFive], [blockSix], [blockSeven], lastBlock, navRight]
// OR
// +2 adjacents
// (block length = 12) if pages.length === 10+
// [navLeft, firstBlock, [ellipsis] principalBlock, blockOne, blockTwo, blockThree, blockFour, blockFive, blockSix, ellipsis, [blockSeven], lastBlock, navRight]
