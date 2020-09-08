from posfix_evaluator.evaluator import evaluate


def test_evaluate_basic_expression():
    assert evaluate("2 2 + ") == 4


def test_evaluate_complex_expression():
    assert evaluate("2 10 + 4 *") == 48
