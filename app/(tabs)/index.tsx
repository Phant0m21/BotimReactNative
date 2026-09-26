import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type MessageKind = 'calls' | 'miss' | 'vip';

type Message = {
  date: string;
  kind: MessageKind;
};

const messages: Message[] = [
  { date: '03/12/2025', kind: 'calls' },
  { date: '13/12/2025', kind: 'miss' },
  { date: '26/12/2025', kind: 'calls' },
  { date: '02/01/2026', kind: 'vip' },
  { date: '26/01/2026', kind: 'calls' },
  { date: '28/02/2026', kind: 'miss' },
  { date: '07/03/2026', kind: 'vip' },
];

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.screen} edges={['top']}>
      <View style={styles.header}>
        <View style={styles.backButton}>
          <Ionicons name="arrow-back" size={25} color="#17191D" />
        </View>
        <View style={styles.avatar}>
          <Image source={require('@/assets/images/botimlogo.png')} style={styles.avatarImage} />
        </View>
        <View style={styles.accountDetails}>
          <View style={styles.accountNameRow}>
            <Text style={styles.accountName}>botim</Text>
            <MaterialCommunityIcons name="check-decagram" size={16} color="#159B58" />
          </View>
          <Text style={styles.accountSubtitle}>Official account</Text>
        </View>
        <View style={styles.profileButton}>
          <Ionicons name="person-outline" size={23} color="#17191D" />
        </View>
      </View>

      <ScrollView
        style={styles.feed}
        contentContainerStyle={styles.feedContent}
        showsVerticalScrollIndicator={false}>
        {messages.map((message, index) => (
          <View key={`${message.date}-${index}`} style={styles.messageBlock}>
            <Text style={styles.date}>{message.date}</Text>
            <View style={styles.messageCard}>
              {message.kind === 'vip' ? <VipArtwork /> : <CallArtwork />}
              <MessageCaption kind={message.kind} />
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

function CallArtwork() {
  return (
    <View style={styles.callArtwork}>
      <View style={styles.emptyCallImage} />
      <View style={styles.callCopy}>
        <Text style={styles.callTitle}>
          Calls on Botim{'\n'}are <Text style={styles.freeText}>FREE</Text> &amp; better{'\n'}than ever.
        </Text>
        <Text style={styles.callDescription}>
          Enjoy upgraded call quality on FREE{'\n'}video &amp; voice calls across the world!
        </Text>
        <View style={styles.callButton}>
          <Text style={styles.callButtonText}>Call Now!</Text>
        </View>
      </View>
    </View>
  );
}

function VipArtwork() {
  return (
    <View style={styles.vipArtwork}>
      <View style={styles.emptyVipImage} />
      <View style={styles.vipCopy}>
        <Text style={styles.vipEyebrow}>♛ B O T I M  V I P</Text>
        <Text style={styles.vipTitle}>
          7 Days of{'\n'}<Text style={styles.vipGold}>VIP for FREE</Text>
        </Text>
        <View style={styles.vipButton}>
          <Text style={styles.vipButtonText}>TAP TO CLAIM</Text>
        </View>
      </View>
    </View>
  );
}

function MessageCaption({ kind }: { kind: MessageKind }) {
  if (kind === 'vip') {
    return (
      <View style={styles.caption}>
        <Text style={styles.captionTitle}>You won 7 days of FREE Botim VIP! 👑</Text>
        <Text style={styles.captionDescription}>Enjoy 7 days of HD calls with NO ADS for 0 AED as a gift!</Text>
      </View>
    );
  }

  if (kind === 'miss') {
    return (
      <View style={styles.caption}>
        <Text style={styles.captionTitle}>We Miss You ❤️</Text>
        <Text style={styles.captionDescription}>
          Botim is 100% free! Tap to call loved ones across the world! 😅
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.caption}>
      <Text style={styles.captionTitle}>Stay close to your loved ones with Botim ❤️</Text>
      <Text style={styles.captionDescription}>
        Connect with friends &amp; family around the world for FREE! Call Now 📞🌎
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 72,
    paddingHorizontal: 12,
    gap: 8,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#E7E8EC',
    backgroundColor: '#FFFFFF',
  },
  backButton: {
    width: 68,
    height: 58,
    borderRadius: 13,
    backgroundColor: '#F0F0F2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 54,
    height: 54,
    borderRadius: 27,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    backgroundColor: '#163FE0',
  },
  avatarImage: {
    width: 54,
    height: 54,
  },
  accountDetails: {
    flex: 1,
    gap: 3,
  },
  accountNameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  accountName: {
    fontSize: 16,
    color: '#17191D',
  },
  accountSubtitle: {
    fontSize: 13,
    color: '#858791',
  },
  profileButton: {
    width: 50,
    height: 43,
    borderRadius: 10,
    backgroundColor: '#F0F0F2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  feed: {
    flex: 1,
  },
  feedContent: {
    paddingTop: 15,
    paddingBottom: 24,
  },
  messageBlock: {
    alignItems: 'center',
    marginBottom: 7,
  },
  date: {
    overflow: 'hidden',
    marginBottom: 9,
    paddingHorizontal: 12,
    paddingVertical: 3,
    borderWidth: 1,
    borderColor: '#D9E0F0',
    borderRadius: 14,
    color: '#30333A',
    backgroundColor: '#FFFFFF',
    fontSize: 11,
  },
  messageCard: {
    width: '92%',
    overflow: 'hidden',
    borderRadius: 17,
    backgroundColor: '#F0EFFB',
  },
  callArtwork: {
    width: '100%',
    aspectRatio: 2.44,
    justifyContent: 'center',
    overflow: 'hidden',
    backgroundColor: '#F8FAFC',
  },
  emptyCallImage: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    width: '36%',
    backgroundColor: '#DDE5EF',
  },
  callCopy: {
    width: '74%',
    paddingLeft: 20,
    paddingVertical: 10,
  },
  callTitle: {
    color: '#101216',
    fontSize: 17,
    fontWeight: '700',
    lineHeight: 19,
  },
  freeText: {
    color: '#1766BE',
  },
  callDescription: {
    marginTop: 5,
    color: '#111318',
    fontSize: 11,
    fontWeight: '600',
    lineHeight: 13,
  },
  callButton: {
    alignSelf: 'flex-start',
    marginTop: 10,
    paddingHorizontal: 11,
    paddingVertical: 3,
    borderRadius: 16,
    backgroundColor: '#1675CF',
    elevation: 2,
  },
  callButtonText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },
  vipArtwork: {
    width: '100%',
    aspectRatio: 2.44,
    justifyContent: 'center',
    overflow: 'hidden',
    backgroundColor: '#111111',
  },
  emptyVipImage: {
    position: 'absolute',
    top: 10,
    right: 12,
    bottom: 10,
    width: '34%',
    borderRadius: 5,
    backgroundColor: '#272727',
  },
  vipCopy: {
    width: '70%',
    paddingLeft: 20,
    paddingVertical: 10,
  },
  vipEyebrow: {
    marginBottom: 10,
    color: '#BDA46B',
    fontSize: 8,
  },
  vipTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 22,
  },
  vipGold: {
    color: '#E2BE70',
  },
  vipButton: {
    alignSelf: 'flex-start',
    marginTop: 10,
    paddingHorizontal: 11,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: '#D9B968',
    borderRadius: 16,
  },
  vipButtonText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '700',
  },
  caption: {
    paddingHorizontal: 9,
    paddingTop: 7,
    paddingBottom: 8,
    gap: 3,
    backgroundColor: '#F0EFFB',
  },
  captionTitle: {
    color: '#17191D',
    fontSize: 15,
    lineHeight: 19,
  },
  captionDescription: {
    color: '#777985',
    fontSize: 12,
    lineHeight: 16,
  },
});