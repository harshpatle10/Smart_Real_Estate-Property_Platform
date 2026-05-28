package pra;

import org.bouncycastle.jcajce.provider.asymmetric.mldsa.MLDSAKeyFactorySpi;

import java.util.Arrays;
import java.util.HashMap;

public class Problem {
    public static void main(String[] args) {

//        nums = [ 11, 7,15,2], target = 9
//        Output: [0, 1]  (because 2 + 7 = 9)

        int arr[] = {3,2,4};
        int target = 6;
        HashMap<Integer,Integer> map = new HashMap<>();
        int i=0;
        for(int num : arr){
            int val = target-arr[i];
            map.put(val,i);
            i++;
        }
        for(int j=0;j<arr.length;j++){
            if (map.containsKey(arr[j])) {
                System.out.println(map.get(arr[j]) +" "+j);
                break;
            }
        }




//        int start = 0;
//        int end = arr.length-1;
//
//        Arrays.sort();
//        while(start<end){
//
//            int sum = arr[start]+arr[end];
//
//            if(sum==target){
//                System.out.print(start+" "+end) ;
//                break;
//            }else if(sum<target){
//                start++;
//            }else{
//                end--;
//            }
//        }
//        System.out.println("not found "+ -1);


    }
}
