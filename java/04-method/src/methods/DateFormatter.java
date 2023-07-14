package methods;

//
public class DateFormatter {
	public static String DateFormatter(long seconds) {
		long hours = seconds / 3600;
	    long minutes = (seconds % 3600) / 60;
	    long remainingSeconds = seconds % 60;

	    String formattedTime = String.format("%02dh%02dm%02ds", hours, minutes, remainingSeconds);
	    return formattedTime;
	}
	
	
}

