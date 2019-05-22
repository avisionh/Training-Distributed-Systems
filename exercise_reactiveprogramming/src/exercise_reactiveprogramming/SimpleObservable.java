package exercise_reactiveprogramming;

import java.util.Arrays;
import java.util.List;

import rx.Observable;

public class SimpleObservable {

	public static void main(String[] args) {
		List<String> topics = Arrays.asList("Statistics", 
				"Machine-learning", "Big data", "Cloud computing", 
				"Actors", "ReactiveX");
		Observable<String> topicTitle = Observable.from(topics);
		topicTitle.subscribe(new SimpleObserver());
	}

}

