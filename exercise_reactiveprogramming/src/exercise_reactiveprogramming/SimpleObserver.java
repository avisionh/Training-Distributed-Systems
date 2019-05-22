package exercise_reactiveprogramming;

import rx.Observer;

public class SimpleObserver implements Observer<String> {

	@Override
	public void onCompleted() {
		System.out.println("Job is done");
	}
	
	@Override
	public void onError(Throwable arg0) {
		System.out.println("Opps, error!");
	}
	
	@Override
	public void onNext(String text) {
		System.out.println("I observed: " + text);
	}
	
}
