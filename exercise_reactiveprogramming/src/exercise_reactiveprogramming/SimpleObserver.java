package exercise_reactiveprogramming;

import rx.Observer;

public class SimpleObserver implements Observer<Integer> {

	@Override
	public void onCompleted() {
		System.out.println("Job is done");
	}
	
	@Override
	public void onError(Throwable arg0) {
		System.out.println("Opps, error!");
	}
	
	@Override
	public void onNext(Integer int_input) {
		System.out.println("I pass in: " + int_input);
	}
	
}
