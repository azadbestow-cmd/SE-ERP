import 'package:flutter_test/flutter_test.dart';
import 'package:se_mobile/main.dart';

void main() {
  testWidgets('app renders title', (tester) async {
    await tester.pumpWidget(const SeMobileApp());
    expect(find.text('SE Mobile'), findsOneWidget);
  });
}
