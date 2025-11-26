1%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% VOCODEUR : Programme principal réalisant un vocodeur de phase 
% et permettant de :
%
% 1- modifier le tempo (la vitesse de "prononciation")
%    sans modifier le pitch
%
% 2- modifier le pitch 
%    sans modifier la vitesse 
%
% 3- "robotiser" une voix
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

clear; close all; clc;

%% Récupération d'un signal audio
%--------------------------------
[filename, pathname] = uigetfile('*.wav', 'Choose an audio file');
if isequal(filename,0)
    error('No audio file selected.');
end

file = fullfile(pathname, filename);
[y, Fs] = audioread(file);
y = y(:,1);   % mono

% Observation du signal original
N = length(y);
t = (0:N-1)/Fs;
f = (0:N-1)*Fs/N; f = f - Fs/2;

figure(1)
subplot(3,1,1), plot(t,y)
title('Original signal')
xlabel('Time (s)')
subplot(3,1,2), plot(f, abs(fftshift(fft(y))))
title('Spectrum of the original signal')
xlabel('Frequency (Hz)')

% se não tiver myspectrogram.m, use spectrogram
spectrogram(y,128,120,128,Fs,'yaxis')
title('Spectrogram of the original signal')

disp('------------------------------------');
disp('ORIGINAL SOUND');
soundsc(y,Fs);

%% MAIN MENU
%--------------------------------
continuer = true;

while continuer
    disp(' ');
    disp('====================================');
    disp('              VOCODER MENU          ');
    disp('====================================');
    disp('1) Change speed (tempo) without changing pitch');
    disp('2) Change pitch without changing speed');
    disp('3) Robotize the voice');
    disp('4) Harmonic Duo/Trio');
    disp('5) Whisper / Ghost Voice');
    disp('6) Telephone / Radio Effect');
    disp('7) Exit');
    choix = input('Your choice: ');

    switch choix

        %% 1- MODIFICATION DE LA VITESSE (TEMPO)
        case 1
            disp('------------------------------------');
            disp('1- CHANGE SPEED (TEMPO) WITHOUT CHANGING PITCH');

            Nfft  = 1024;
            Nwind = Nfft;

            % rapp = v_orig / v_arrivee
            % -> rapp_lent > 1  : son plus lent
            % -> rapp_rapide < 1: son plus rapide

            % Plus lent
            rapp_lent = 3/2;
            ylent = PVoc(y, rapp_lent, Nfft, Nwind);
            pause;
            disp('Faster sound (pitch preserved)');
            soundsc(ylent, Fs);

            % Plot pour ylent
            Nyl = length(ylent);
            tl = (0:Nyl-1)/Fs;
            fl = (0:Nyl-1)*Fs/Nyl; fl = fl - Fs/2;
            figure;
            subplot(3,1,1), plot(tl, ylent)
            title('YLent - Time domain')
            xlabel('Time (s)')
            grid on
            subplot(3,1,2), plot(fl, abs(fftshift(fft(ylent))))
            title('YLent - Spectrum')
            xlabel('Frequency (Hz)')
            grid on
            subplot(3,1,3), spectrogram(ylent,128,120,128,Fs,'yaxis')
            title('YLent - Spectrogram')

            % Plus rapide
            rapp_rapide = 2/3;
            yrapide = PVoc(y, rapp_rapide, Nfft, Nwind);
            pause;
            disp('Slower sound (pitch preserved)');
            soundsc(yrapide, Fs);

            % Plot pour yrapide
            Nyr = length(yrapide);
            tr = (0:Nyr-1)/Fs;
            fr = (0:Nyr-1)*Fs/Nyr; fr = fr - Fs/2;
            figure;
            subplot(3,1,1), plot(tr, yrapide)
            title('YRapide - Time domain')
            xlabel('Time (s)')
            grid on
            subplot(3,1,2), plot(fr, abs(fftshift(fft(yrapide))))
            title('YRapide - Spectrum')
            xlabel('Frequency (Hz)')
            grid on
            subplot(3,1,3), spectrogram(yrapide,128,120,128,Fs,'yaxis')
            title('YRapide - Spectrogram')

        %% 2- MODIFICATION DU PITCH SANS CHANGER LA VITESSE
        case 2
            disp('------------------------------------');
            disp('2- CHANGE PITCH WITHOUT CHANGING SPEED');

            Nfft  = 256;
            Nwind = Nfft;

            % 2.1 - Pitch plus aigu
            a = 2; 
            b = 3;
            yvoc    = PVoc(y, a/b, Nfft, Nwind);
            ypitch1 = resample(yvoc, a, b);  % precisa da Signal Processing Toolbox
            pause;
            disp('Increased pitch (speed preserved)');
            soundsc(ypitch1, Fs);

            % Plot pour ypitch1
            Np1 = length(ypitch1);
            tp1 = (0:Np1-1)/Fs;
            fp1 = (0:Np1-1)*Fs/Np1; fp1 = fp1 - Fs/2;
            figure;
            subplot(3,1,1), plot(tp1, ypitch1)
            title('YPitch1 - Time domain')
            xlabel('Time (s)')
            grid on
            subplot(3,1,2), plot(fp1, abs(fftshift(fft(ypitch1))))
            title('YPitch1 - Spectrum')
            xlabel('Frequency (Hz)')
            grid on
            subplot(3,1,3), spectrogram(ypitch1,128,120,128,Fs,'yaxis')
            title('YPitch1 - Spectrogram')

            % 2.2 - Pitch plus grave
            a = 3; 
            b = 2;
            yvoc    = PVoc(y, a/b, Nfft, Nwind);
            ypitch2 = resample(yvoc, a, b);
            pause;
            disp('Decreased pitch (speed preserved)');
            soundsc(ypitch2, Fs);

            % Plot pour ypitch2
            Np2 = length(ypitch2);
            tp2 = (0:Np2-1)/Fs;
            fp2 = (0:Np2-1)*Fs/Np2; fp2 = fp2 - Fs/2;
            figure;
            subplot(3,1,1), plot(tp2, ypitch2)
            title('YP - Time domain')
            xlabel('Time (s)')
            grid on
            subplot(3,1,2), plot(fp2, abs(fftshift(fft(ypitch2))))
            title('YPitch2 - Spectrum')
            xlabel('Frequency (Hz)')
            grid on
            subplot(3,1,3), spectrogram(ypitch2,128,120,128,Fs,'yaxis')
            title('YPitch2 - Spectrogram')

        %% 3- VOIX ROBOTISÉE (MENU COM AS FREQUÊNCIAS 1 A 1)
        case 3
            continuerRob = true;
            while continuerRob
                clc;
                disp('------------------------------------');
                disp('         VOICE ROBOTIZATION         ');
                disp('------------------------------------');
                disp('Choose the carrier frequency fc (Hz):');
                disp(' 1) 200 Hz');
                disp(' 2) 500 Hz');
                disp(' 3) 1000 Hz');
                disp(' 4) 2000 Hz');
                disp(' 5) Other frequency...');
                disp(' 6) Back to main menu');
                op = input('Option: ');

                switch op
                    case 1
                        Fc = 200;
                    case 2
                        Fc = 500;
                    case 3
                        Fc = 1000;
                    case 4
                        Fc = 2000;
                    case 5
                        Fc = input('Enter desired frequency (Hz): ');
                    case 6
                        break;
                    otherwise
                        disp('Invalid option, please try again.');
                        pause(1);
                        continue;
                end

                if op == 6
                    break;
                end

                % Chamada da função de voz robotizada
                yrob = Rob(y, Fc, Fs);
                disp('------------------------------------');
                fprintf('3- ROBOT VOICE (fc = %.1f Hz)\n', Fc);
                soundsc(yrob, Fs);

                % Observação (opcional)
                Nrob = length(yrob);
                trob = (0:Nrob-1)/Fs;
                frob = (0:Nrob-1)*Fs/Nrob; frob = frob - Fs/2;

                figure(6)
                subplot(3,1,1), plot(trob,yrob)
                title(sprintf('Robot signal (fc = %.1f Hz)', Fc))
                xlabel('Time (s)')
                subplot(3,1,2), plot(frob, abs(fftshift(fft(yrob))))
                title('Spectrum of the robot signal')
                xlabel('Frequency (Hz)')
                subplot(3,1,3), spectrogram(yrob,128,120,128,Fs,'yaxis')
                title('Spectrogram of the robot signal')

                resp = input('Test another frequency? (y/n): ', 's');
                if lower(resp) ~= 'y'
                    continuerRob = false;
                end
            end

        %% 4- HARMONIC DUO / TRIO
        case 4
            disp('------------------------------------');
            disp('4- HARMONIC DUO / TRIO (PITCH SHIFTING)');

            y_trio = HarmonicDuoTrio(y, Fs);
            soundsc(y_trio, Fs);

            % Plot pour y_trio
            Ny = length(y_trio);
            ty = (0:Ny-1)/Fs;
            fy = (0:Ny-1)*Fs/Ny; fy = fy - Fs/2;
            figure;
            subplot(3,1,1), plot(ty, y_trio)
            title('Harmonic Duo/Trio - Time domain')
            xlabel('Time (s)'); grid on
            subplot(3,1,2), plot(fy, abs(fftshift(fft(y_trio))))
            title('Harmonic Duo/Trio - Spectrum')
            xlabel('Frequency (Hz)'); grid on
            subplot(3,1,3), spectrogram(y_trio,128,120,128,Fs,'yaxis')
            title('Harmonic Duo/Trio - Spectrogram')


        %% 5- WHISPER / GHOST VOICE
        case 5
            disp('------------------------------------');
            disp('5- WHISPER / GHOST VOICE (WHISPERIZATION)');

            y_whisper = WhisperGhostVoice(y, Fs);
            soundsc(y_whisper, Fs);

            % Plot pour y_whisper
            Ny = length(y_whisper);
            ty = (0:Ny-1)/Fs;
            fy = (0:Ny-1)*Fs/Ny; fy = fy - Fs/2;
            figure;
            subplot(3,1,1), plot(ty, y_whisper)
            title('Whisper/Ghost - Time domain')
            xlabel('Time (s)'); grid on
            subplot(3,1,2), plot(fy, abs(fftshift(fft(y_whisper))))
            title('Whisper/Ghost - Spectrum')
            xlabel('Frequency (Hz)'); grid on
            subplot(3,1,3), spectrogram(y_whisper,128,120,128,Fs,'yaxis')
            title('Whisper/Ghost - Spectrogram')


        %% 6- TELEPHONE / RADIO EFFECT
        case 6
            disp('------------------------------------');
            disp('6- TELEPHONE / RADIO EFFECT');

            y_radio = TelephoneRadioEffect(y, Fs);
            soundsc(y_radio, Fs);

            % Plot pour y_radio
            Ny = length(y_radio);
            ty = (0:Ny-1)/Fs;
            fy = (0:Ny-1)*Fs/Ny; fy = fy - Fs/2;
            figure;
            subplot(3,1,1), plot(ty, y_radio)
            title('Telephone/Radio - Time domain')
            xlabel('Time (s)'); grid on
            subplot(3,1,2), plot(fy, abs(fftshift(fft(y_radio))))
            title('Telephone/Radio - Spectrum')
            xlabel('Frequency (Hz)'); grid on
            subplot(3,1,3), spectrogram(y_radio,128,120,128,Fs,'yaxis')
            title('Telephone/Radio - Spectrogram')

        %% 7- EXIT
        case 7
            continuer = false;
            disp('Exiting VOCODER program.');

        otherwise
            disp('Invalid choice. Please try again.');
    end
end
