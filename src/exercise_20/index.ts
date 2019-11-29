
export const exercise_20 = (num: number): number => {
    const partitions: string[] = [];

    for (let ceil = num; ceil >= 1; ceil--) {
        let pivot: number = ceil;
        let partition: string = `${ceil}`;

        while(true) {
            if(partition.length === 0) {
                partition = `${ceil}`;
            }

            let partitionSum = partition.split(',').map(num => Number(num)).reduce((prev, current) => prev + current);
            
            if (pivot === 0) {
                break;
            }

            if( partitionSum === num) {
                partitions.push(partition);

                // if(pivot === 0) {
                //     break;
                // }
            } 
                                                                                                                                                           
            if (partitionSum + pivot <= num) {
                partition = `${partition},${pivot}`;
            } 
            
            if (partitionSum + pivot > num) {
                pivot --;
            }

            
            
        }
    }

    return partitions.length;
    // return partp(num, undefined);
}

const partp = (n: number,k: number | undefined) => {
    if (k == undefined) {
       var sum=0;
       for (var i=1; i<=n; i++) {
          sum += partp(n,i);
       }
       return sum;
    }
    if ((n == 0) || (n == 1)) { return 1; } // base cases, {0} and {1}
    if ((k == 1) || (n == k)) { return 1; } // base cases, {1+1+...} and {n}
    var sum = 0;
    for (var i=1; i<=Math.min(k,n-k); i++) {
       sum += partp(n-k,i);
    }
    return sum;
 }