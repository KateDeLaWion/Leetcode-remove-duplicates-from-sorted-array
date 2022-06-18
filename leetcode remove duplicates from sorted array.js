var removeDuplicates = function(nums) {
    
    let pointer = 0
for (let i=0; i < nums.length - 1; i++){
if(nums[i] !== nums[i+1]){
nums[pointer+1] = nums[i+1]
pointer++;
}
}
return pointer+1; // the question only asks to return k the array length. Not the array
    
};  