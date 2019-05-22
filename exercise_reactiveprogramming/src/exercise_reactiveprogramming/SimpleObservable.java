package exercise_reactiveprogramming;

import java.util.Arrays;
import java.util.List;

import rx.Observable;

public class SimpleObservable {

	public static void main(String[] args) {
		List<Integer> values = Arrays.asList(1, 2, 3, 4, 5);
		Observable<Integer> valueOutput = Observable.from(values);
		valueOutput.subscribe(new SimpleObserver());
	}

}

