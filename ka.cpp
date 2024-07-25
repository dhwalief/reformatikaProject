#include <iostream>
using namespace std;

bool adalahTahunKabisat(int tahun) {
    if (tahun % 4 == 0) {
        if (tahun % 100 == 0) {
            if (tahun % 400 == 0)
                return true;
            else
                return false;
        } else
            return true;
    } else
        return false;
}

int main() {
    int tahun;
    cout << "Masukkan tahun: ";
    cin >> tahun;

    if (adalahTahunKabisat(tahun))
        cout << "N : " << tahun << "\nMerupakan tahun kabisat" << endl;
    else
        cout << "N : " << tahun << "\nBukan tahun kabisat" << endl;

    return 0;
}
