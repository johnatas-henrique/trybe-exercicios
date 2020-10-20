clara = [0, 1, 5, 9, 10]
marco = [0, 2, 8, 9, 10]

entrada = {
    'Clara': [0, 1, 5, 9, 10],
    'Marco': [0, 2, 8, 9, 10]
}

def blefe(players):
    players_list = list(players.items())
    player1 = players_list[0]
    player2 = players_list[1]

    set_player1 = set(player1[1])
    set_player2 = set(player2[1])
    diff_player1 = set_player1.difference(set_player2)
    diff_player2 = set_player2.difference(set_player1)
    score_player1 = max(diff_player1) - min(diff_player1)
    score_player2 = max(diff_player2) - min(diff_player2)
    if score_player1 > score_player2:
        return player1[0]
    if score_player2 > score_player1:
        return player2[0]
    if score_player1 == score_player2:
        return 'Houve empate'


print(blefe(entrada))
